// Copyright (C) 2022  Aranggi J. Toar <at@aranggitoar.com>
// Full GPL-2.0 notice  https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

#[derive(serde::Serialize, Default)]
pub struct Response {
    pub message: String,
    pub err: String,
}
