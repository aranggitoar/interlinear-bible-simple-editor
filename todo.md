## Logging Changes

Log the changes on every verse change with at least half of the verse is
translated. Steps:

1. Send the verse reference and edit log to the backend as a formatted
   multiline string with an empty line below the last line.
2. Append the log to an existing file or create a new one if it
   doesn't exist.

OR

1. Create a separate branch for a raw deminified json file.
2. Deminify the JSON on every save and commit it into that branch.
3. Git diff it on the backend and append the result to an existing file or
   create a new one if it doesn't exist.

Details about the log file:

- The log would be inside a directory named `changelog`and separated for
  each month with an example filename of `1_092022.txt` for the log index
  one on September of 2022.
- The log index is necessary to order the logs, if not, month 11 and 12
  would be ordered right after month 1 and might be confusing.

## Others

- Change Toast to HopeUI's notification component.

## Moving from Tauri to Wails

This is necessary, as a couple of collaboration features requires it.

Things to port:

- File logic (check if exists, save from synchronized, load from synchronized)
- Repo logic (clone, check for changes, commit, push, pull)

**1 WEEK**

New features:

- Multi-user logic (server connection, different access levels)
- (Email notification?)

**2 WEEK** without email notification feature

Halfway implemented:

- Merge conflicts handling (what conflicts is there, when the last change is
  made and who made the last change)

**3 WEEKS**

Decisions to be made:

- What access levels would there be?
  - Owner, what authority would he have?
  - Editor, three types of editor (Bible, lexicon and all)?
  - Viewer, one type only?
