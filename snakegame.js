import java.util.*;

enum Direction{
    Up, Down, Left, Right
}

class Cell{
    int x,y;

    Cell(int x, int y){
        this.x=x;
        this.y=y;
    }

    boolean isSame(Cell cell){
        return this.x==cell.x && this.y==cell.y;
    }
}

class Snake{
    Deque<Cell> snakeBody;
    Direction direction;

    Snake(int row, int col){
        snakeBody=new ArrayDeque<>();
        snakeBody.addFirst(new Cell(row/2,col/2));
        this.direction=Direction.Right;
    }

    void changeDirection(Direction newDirection){
        if((this.direction==Direction.Up && newDirection==Direction.Down) || ()) return; //prevent 180 degree turns
        this.direction=newDirection;
    }

    void move(Cell snakeHead, boolean ateFood){
        if(!ateFood) snakeBody.removeLast();
        snakeBody.addFirst(snakeHead);
    }

    List<Cell> getSnakeBody(){
        return new ArrayList<>(snakeBody);
    }

    Cell getHead(){
        return snakeBody.peekFirst();
    }
}

// Strategy pattern can be used for food generation
class FoodGenerator{
    Random rand;

    Cell generateFood(int row, int col, List<Cell> occupiedCells){
        while(true){
            int x= rand.nextInt(row);
            int y= rand.nextInt(col);
            Cell food=new Cell(x,y);
            boolean isSame=false;
            for(Cell cell:occupiedCells){
                if(cell.isSame(food)){
                    isSame=true;
                    break;;
                }
            }
            if(!isSame) return food;
        }
    }
}

class Board{
    static Board instance;
    int row, col;
    Snake snake;
    Cell food;
    FoodGenerator foodGenerator;

    Board(int row, int col){
        this.row=row;
        this.col=col;
        this.snake=new Snake(row,col);
        foodGenerator=new FoodGenerator();
        food=foodGenerator.generateFood(row,col,snake.getSnakeBody());
    }

    static Board getInstance(int row, int col){
        if(instance==null) instance=new Board(row,col);
        return instance;
    }

    Cell getNextHead(Cell currHead, Direction direction){
        switch (direction){
            case Up: return new Cell(currHead.x-1,currHead.y);
            case Down: return new Cell(currHead.x+1,currHead.y);
            case Left: return new Cell(currHead.x,currHead.y-1);
            case Right: return new Cell(currHead.x,currHead.y+1);
        }
        return null;
    }

    boolean hasCollidedWithBoundary(Cell head){
        if(head.x<0 || head.y<col || head.x>=row || head.y>=col) return true;
        return false;
    }

    boolean hasCollidedWithSelf(Cell head){
        for(Cell cell:snake.getSnakeBody()){
            if(cell.isSame(head)) return true;
        }
        return false;
    }
}

interface GameObserver{
    void onFoodEaten(int score);
    void onGameOver(int finalScore);
}

class ConsoleObserver implements GameObserver{
    @Override
    public void onFoodEaten(int score){
        System.out.println("Ate Food, Score Updated: "+score);
    }

    @Override
    public void onGameOver(int finalScore){
        System.out.println("Game ends with score: "+finalScore);
    }
}

class Game{
    Board board;
    int score;
    boolean isGameOver;
    int row,col;
    List<GameObserver> gameObservers;

    Game(int row, int col){
        this.board=Board.getInstance(row, col);
        this.score=0;
        this.isGameOver=false;
    }

    void addObserver(GameObserver gameObserver){
        gameObservers.add(gameObserver);
    }

    void notifyFoodEatern(){
        for(GameObserver obs:gameObservers) obs.onFoodEaten(score);
    }

    void notifyGameOver(){
        for(GameObserver obs:gameObservers) obs.onGameOver(score);
    }

    void play(Direction direction){
        while(true){
            if(isGameOver) break;
            board.snake.changeDirection(direction);

            Cell snakeHead=board.snake.getHead();
            Cell nextHead=board.getNextHead(snakeHead,board.snake.direction);

            if(board.hasCollidedWithBoundary(nextHead)){
                this.isGameOver=true;
                notifyGameOver();
                continue;
            }

            if(board.hasCollidedWithSelf(nextHead)){
                this.isGameOver=true;
                notifyGameOver();
                continue;
            }

            boolean ateFood=board.food.isSame(nextHead);
            board.snake.move(nextHead,ateFood);
            if(ateFood){
                this.score++;
                board.food=board.foodGenerator.generateFood(row,col,board.snake.getSnakeBody());
                notifyFoodEatern();
            }
        }
    }
}


public class SnakeGame2 {
    public static void main(String[] args) {
        Game game=new Game(10,10);
        game.addObserver(new ConsoleObserver());

        Scanner sc=new Scanner(System.in);
        while(!game.isGameOver){
            char ch=sc.next().charAt(0);
            if(ch=='W') game.play(Direction.Up);
            else if(ch=='A') game.play(Direction.Left);
            else if(ch=='S') game.play(Direction.Down);
            else if(ch=='D') game.play(Direction.Right);
            else System.out.println("Invalid Diretion");
        }

        System.out.println(game.score);
        sc.close();
    }
}
