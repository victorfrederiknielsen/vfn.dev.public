locals {
  env = {
    default = {
      env    = "dev"
      region = "eu-central-1"
    }
    prod = {
      env = "prod"
    }
  }

  environmentvars = "${contains(keys(local.env), terraform.workspace) ? terraform.workspace : "default"}"
  workspace       = "${merge(local.env["default"], local.env[local.environmentvars])}"
}
