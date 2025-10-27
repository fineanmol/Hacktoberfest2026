#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <time.h>
#include <unistd.h>
#include <signal.h>
#include <sys/ioctl.h>
#include <sys/types.h>
#include <sys/time.h>

static void restore_cursor(int sig) {
    (void)sig;
    write(1, "\x1b[0m\x1b[?25h\n", 12); // reset color & show cursor
    exit(0);
}

int main() {
    struct winsize w;
    if (ioctl(1, TIOCGWINSZ, &w) == -1) {
        w.ws_row = 24;
        w.ws_col = 80;
    }

    int rows = w.ws_row;
    int cols = w.ws_col; // full width now

    signal(SIGINT, restore_cursor);
    signal(SIGTERM, restore_cursor);

    srand((unsigned)time(NULL));
    double t = 0;
    double start_time = time(NULL);

    write(1, "\x1b[?25l", 6); // hide cursor

    while (time(NULL) - start_time < 10) { // stop after 10 seconds
        char buf[8192];
        int p = 0;

        buf[p++] = '\x1b';
        buf[p++] = '[';
        buf[p++] = 'H'; // move cursor to top

        for (int y = 0; y < rows; y++) {
            for (int x = 0; x < cols; x++) {
                double nx = (double)x / cols * 8.0;
                double ny = (double)y / rows * 6.0;

                // New pattern: mix of sin and cos for richer effect
                double v = sin(nx + t) + cos(ny * 1.5 - t * 0.7) + sin((nx + ny) * 0.8 + t * 0.3);

                // Adjusted color range for vivid look
                int color = (int)((v + 3.0) / 6.0 * 200.0) + 30;
                if (color < 16) color = 16;
                if (color > 231) color = 231;

                int n = snprintf(buf + p, sizeof(buf) - p, "\x1b[48;5;%dm█", color);
                if (n < 0) n = 0;
                p += n;
            }
            int n = snprintf(buf + p, sizeof(buf) - p, "\x1b[0m\n");
            if (n < 0) n = 0;
            p += n;
        }

        write(1, buf, p);
        t += 0.12;          // faster motion
        usleep(40000);      // smoother + faster animation
    }

    restore_cursor(0);
    return 0;
}
