use std::process::{Command, Stdio};
use std::str::from_utf8;

use crate::path;
use crate::response::Response;

// TODO: Make it configurable from the frontend.
#[tauri::command]
pub async fn clone() -> Response {
    let mut response: Response = Default::default();

    // TODO: Show the stdout messages in the frontend.
    // Clone repo.
    match Command::new("git")
        .arg("clone")
        .arg("git@git.sr.ht:~toar/aist-terjemahan")
        .status()
    {
        Ok(_) => response.message = "ok".into(),
        Err(error) => response.message = error.to_string(),
    };

    response
}

// Check if there is changes yet to be commited.
#[tauri::command]
pub async fn has_changes() -> Response {
    let mut response: Response = Default::default();

    let output = Command::new("git")
        .arg("status")
        .current_dir(path::TO_DIR)
        .stdout(Stdio::piped())
        .output()
        .expect("Failed to run command");

    let string_output = from_utf8(&output.stdout).unwrap();

    if string_output.contains("Changes not staged for commit:") {
        response.message = "true".into();
    } else {
        response.message = "false".into();
    }

    response
}

// TODO: Commit to both the main branch for the archive and the raw_deminified_json for the raw
// deminified json.
#[tauri::command]
pub fn commit(message: String) -> Response {
    let mut response: Response = Default::default();

    // Add and commit all changes
    match Command::new("git")
        .arg("commit")
        .arg("-am")
        .arg(message)
        .current_dir(path::TO_DIR)
        .status()
    {
        Ok(_) => response.message = "ok".into(),
        Err(error) => response.message = error.to_string(),
    };

    response
}

#[tauri::command]
pub async fn push() -> Response {
    let mut response: Response = Default::default();

    match Command::new("git")
        .arg("push")
        .current_dir(path::TO_DIR)
        .status()
    {
        Ok(res) => response.message = res.to_string(),
        Err(error) => response.message = error.to_string(),
    }

    response
}

#[tauri::command]
pub async fn pull() -> Response {
    let mut response: Response = Default::default();

    match Command::new("git")
        .arg("pull")
        .current_dir(path::TO_DIR)
        .status()
    {
        Ok(_) => response.message = "true".into(),
        Err(error) => response.message = error.to_string(),
    }

    response
}
