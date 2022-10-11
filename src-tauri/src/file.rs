// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

use std::fs::{read_to_string, OpenOptions};
use std::io::{prelude::*, Seek, SeekFrom};
use std::path::Path;

use crate::path;
use crate::response::Response;

// Check if the globally specified directory exists.
#[tauri::command]
pub fn exists() -> Response {
    let mut response: Response = Default::default();

    if Path::new(path::TO_DIR).exists() {
        response.message = "true".into();
    } else {
        response.message = "false".into();
    }

    response
}

// Write data sent from the frontend to a file with the globally specified path.
#[tauri::command]
pub async fn save(bible: String) -> Response {
    let mut response: Response = Default::default();

    let mut file = match OpenOptions::new()
        .read(true)
        .write(true)
        .create(true)
        .open(path::TO_FILE)
    {
        Ok(res) => res,
        Err(error) => {
            response.err = error.to_string();
            return response;
        }
    };

    match file.seek(SeekFrom::Start(0)) {
        Ok(_) => {}
        Err(error) => {
            response.err = error.to_string();
            return response;
        }
    };

    match file.write_all(bible.as_bytes()) {
        Ok(_) => {
            response.message = "ok".into();
            return response;
        }
        Err(error) => {
            response.err = error.to_string();
            return response;
        }
    };
}

// Load data from a file with the globally specified path and send it to the frontend.
#[tauri::command]
pub async fn load() -> Response {
    let mut response: Response = Default::default();

    match read_to_string(path::TO_FILE) {
        Ok(res) => {
            response.message = res.into();
            return response;
        }
        Err(error) => {
            response.message = error.to_string();
            return response;
        }
    }
}
