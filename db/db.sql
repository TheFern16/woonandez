DROP TABLE IF EXISTS comments CASCADE;
CREATE TABLE comments (
  comment_id SERIAL,
  comment VARCHAR(256),
  timestamp TIMESTAMP default current_timestamp,
  PRIMARY KEY (comment_id)
);