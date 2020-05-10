provider "aws" {
  region = var.region
}

resource "aws_s3_bucket" "b" {
  bucket = "vfn.dev-${var.env}"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}
