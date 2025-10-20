#!/usr/bin/env python3
# todo_cli.py
import json
import sys
from pathlib import Path

DB = Path("todos.json")

def load():
    if DB.exists():
        return json.loads(DB.read_text())
    return []

def save(todos):
    DB.write_text(json.dumps(todos, indent=2))

def list_todos():
    todos = load()
    if not todos:
        print("No todos. Add one with: todo_cli.py add \"Buy milk\"")
        return
    for i, t in enumerate(todos, 1):
        status = "✔" if t.get("done") else " "
        print(f"{i:2}. [{status}] {t['text']}")

def add_todo(text):
    todos = load()
    todos.append({"text": text, "done": False})
    save(todos)
    print("Added:", text)

def remove_todo(index):
    todos = load()
    try:
        removed = todos.pop(index-1)
        save(todos)
        print("Removed:", removed['text'])
    except IndexError:
        print("Invalid index.")

def done_todo(index):
    todos = load()
    try:
        todos[index-1]['done'] = True
        save(todos)
        print("Marked done:", todos[index-1]['text'])
    except IndexError:
        print("Invalid index.")

def help_msg():
    print("""Usage:
  todo_cli.py list
  todo_cli.py add "task description"
  todo_cli.py remove INDEX
  todo_cli.py done INDEX
""")

def main(argv):
    if len(argv) < 2:
        help_msg(); return
    cmd = argv[1].lower()
    if cmd == "list":
        list_todos()
    elif cmd == "add" and len(argv) >= 3:
        add_todo(" ".join(argv[2:]))
    elif cmd == "remove" and len(argv) == 3:
        remove_todo(int(argv[2]))
    elif cmd == "done" and len(argv) == 3:
        done_todo(int(argv[2]))
    else:
        help_msg()

if __name__ == "__main__":
    main(sys.argv)
