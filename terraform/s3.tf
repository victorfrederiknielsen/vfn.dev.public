provider "aws" {
  region = local.workspace.region
}

resource "aws_s3_bucket" "b" {
  bucket = "vfn.dev-${local.workspace.env}"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}
