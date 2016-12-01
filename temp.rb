require 'aws-sdk'
require 'digest'
require 'dotenv'
require 'find'

S3_REGION = 'ap-southeast-1'
S3_BUCKET = 'cs-challenge'
S3_URL    = 'https://cs-challenge.s3-ap-southeast-1.amazonaws.com/'

Dotenv.load

s3 = Aws::S3::Resource.new(
  region: S3_REGION,
  credentials: Aws::Credentials.new(ENV['AWSAccessKeyId'], ENV['AWSSecretKey'])
)

bucket = s3.bucket(S3_BUCKET)

bucket.objects.each do |obj|
  obj.copy_from(
    obj,
    content_type: 'image/png',
    metadata_directive: 'REPLACE',
    acl: 'public-read'
  )
end
