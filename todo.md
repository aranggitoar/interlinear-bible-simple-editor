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
