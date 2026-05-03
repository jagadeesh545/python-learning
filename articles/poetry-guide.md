# Modern Python Packaging with Poetry

Poetry is a tool for dependency management and packaging in Python. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you.

## 1. Why Poetry?

Poetry replaces `requirements.txt`, `setup.py`, and `setup.cfg` with a single file: `pyproject.toml`. It automatically handles virtual environments and provides a robust lockfile (`poetry.lock`) to guarantee reproducible installations.

## 2. Installation

It's recommended to install Poetry globally:

```bash
curl -sSL https://install.python-poetry.org | python3 -
```

## 3. Initializing a Project

If you are starting a new project, you can use:
```bash
poetry new my-project
```

If you already have a project, navigate to it and run:
```bash
poetry init
```
This interactive command will guide you through creating your `pyproject.toml`.

## 4. Managing Dependencies

To add a new dependency:
```bash
poetry add requests
```
This automatically updates `pyproject.toml`, resolves the dependency tree, updates `poetry.lock`, and installs the package into a managed virtual environment.

To add a development dependency (like a linter or test framework):
```bash
poetry add --group dev pytest ruff
```

## 5. Running Code

Poetry creates virtual environments behind the scenes. To execute a script within that environment, use `poetry run`:

```bash
poetry run python main.py
poetry run pytest
```