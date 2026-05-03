# Managing Dependencies with requirements.txt

The `requirements.txt` pattern is the oldest and most widely supported method for managing Python dependencies. It relies on Python's built-in `venv` module and the default package installer, `pip`.

## 1. Creating a Virtual Environment

To isolate your project, first create a virtual environment:

```bash
python -m venv .venv
```

This creates a directory named `.venv` containing an isolated Python installation.

## 2. Activating the Environment

Before installing packages, you must activate the environment:

- **macOS/Linux:**
  ```bash
  source .venv/bin/activate
  ```
- **Windows:**
  ```cmd
  .venv\Scripts\activate
  ```

Your terminal prompt will change to indicate the active environment.

## 3. Installing Packages

With the environment activated, install packages using `pip`:

```bash
pip install fastapi uvicorn
```

## 4. Freezing Dependencies

To allow others to reproduce your environment, you "freeze" the currently installed packages into a file:

```bash
pip freeze > requirements.txt
```

## 5. Installing from requirements.txt

When another developer (or a CI/CD server) needs to set up the project, they can run:

```bash
pip install -r requirements.txt
```