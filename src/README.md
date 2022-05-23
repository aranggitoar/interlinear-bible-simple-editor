# What are these four TSX files?
They are:
1. `App.tsx` the main application component.
2. `desktop.tsx` entry point for the desktop application.
3. `dev.tsx` entry point for development.
4. `web.tsx` entry point for the web application.

Though entry point for development and the web application is similar, for
development we're using a Hot Module Reload library, hence it is made to be
separate files.
