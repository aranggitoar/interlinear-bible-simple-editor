// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod file;
mod git;
mod path;
mod response;

// TODO: Implement per Bible book separation on saving, loading, etc. and configurable file name/s
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            file::save,
            file::load,
            file::exists,
            git::has_changes,
            git::clone,
            git::commit,
            git::push,
            git::pull,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
