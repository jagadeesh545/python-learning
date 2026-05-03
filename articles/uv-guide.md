# Ultra-fast Python Package Management with uv

uv is a blazing-fast Python package installer and resolver, written in Rust by the team behind the popular `Ruff` linter. It acts as a drop-in replacement for `pip`, `pip-tools`, and `virtualenv`.

## 1. Why uv?

- **Speed:** It resolves and installs packages 10-100x faster than `pip` or `Poetry`.
- **Compatibility:** It understands existing `requirements.txt` formats and `pyproject.toml`.
- **Simplicity:** It does not force you to adopt a completely new workflow or ecosystem.

## 2. Installation

You can install `uv` globally via curl, pip, or Homebrew:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
# or using pip
pip install uv
```

## 3. Creating a Virtual Environment

`uv` can create virtual environments almost instantly:

```bash
uv venv
```
Activate it just like a normal virtual environment:
```bash
source .venv/bin/activate
```

## 4. Installing Packages

Use `uv pip` to install packages. The API is intentionally identical to standard `pip`:

```bash
uv pip install fastapi
```
You will immediately notice the difference in speed, especially for large dependency trees.

## 5. Compiling Dependencies (pip-tools alternative)

If you use `requirements.in` to define top-level dependencies, `uv` can quickly resolve them into a lockfile (`requirements.txt`):

```bash
# Compile requirements.in into requirements.txt
uv pip compile requirements.in -o requirements.txt
```