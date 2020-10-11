# post-viewer
Application will display posts and related comments.

# How to Build and Run
#### Clone Repository
<pre>
  git clone https://github.com/madhawas1/post-viewer
</pre>

#### Build Service Application
<pre>
  cd post-viewer\post-service
  mvn clean install
</pre>

#### Run Service Application
<pre>
  cd target
  java -jar post-service-1.0.0-SNAPSHOT.jar
</pre>

#### Build UI Application
<pre>
  cd ..\..\posts-ui
  npm install
</pre>

#### Run UI Application
<pre>
  npm start
</pre>
