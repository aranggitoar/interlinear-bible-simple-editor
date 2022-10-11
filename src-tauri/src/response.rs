#[derive(serde::Serialize, Default)]
pub struct Response {
    pub message: String,
    pub err: String,
}
