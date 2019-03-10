## Portfolio site - Refactoring from Bootstrap 4 to Vue.js

This project is meant to upgrade the architecture of my portfolio site and implement the best framework currently available.

Which will also serve to reduce the dependence on old tech like jQuery and increasingly irrelevant tech like Bootstrap. Both may have been a good solution to many problems in the past, but current web standards make these 2 technologies less and less necessary.


### to run the dev server
cd my-ninja-project
npm run serve


### AWS staging site

https://s3.amazonaws.com/carlosv.ninja-staging/dist/index.html


-----------------------------------------------------------------------------

DEploying to AWS S3 bucket

1. Create Bucket
2. Configure the AWS CLI
3. Use the aws-cli to sync your ./dist folder to your new bucket. Syncing will diff what’s in your ./dist folder with what’s in the bucket and only upload the required changes.

aws s3 sync ./dist s3://your-bucket-name

4. Tab back to your S3 bucket endpoint, and you should see your site hosted on S3!

5. add the following script entry to package.json so you can run npm run deploy when you want to sync your files.

"scripts": {
  "deploy": "aws s3 sync ./dist s3://your-bucket-name"
}