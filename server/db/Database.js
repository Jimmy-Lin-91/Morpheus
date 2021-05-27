import SQLite from 'react-native-sqlite-storage';
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = 'DreamPalace.db';
const database_version = "5.0";
const database_displayname = 'Dream Palace Database';
const database_size = 200000;

export default class Database {
  initDB() {
    let db;
    return new Promise((resolve) => {
      console.log('Plugin integrity check...');
      SQLite.echoTest()
        .then(() => {
          console.log('Integiry check passed ...');
          console.log('Opening database');
          SQLite.openDatabase(
            database_name,
            database_version,
            database_displayname,
            database_size
          )
            .then(DB => {
              db = DB;
              console.log('Database Open!');
              db.executeSql('SELECT 1 FROM Summary LIMIT 1').then(() => {
                console.log('Database is ready ... executing query...');
              }).catch((error) => {
                console.log('Received error: ', error);
                console.log('Database not yet ready ... populating data');
                db.transaction((tx) => {
                  tx.executeSql('CREATE TABLE IF NOT EXISTS Summary (dreamId INTEGER PRIMARY KEY, summary TEXT, emotions TEXT, settings TEXT, people TEXT)');
                }).then(() => {
                  console.log('Summary table created successfully');
                }).catch(error => {
                  console.log(error);
                });
                db.transaction((tx) => {
                  tx.executeSql('CREATE TABLE IF NOT EXISTS Notes (noteId INTEGER, note TEXT, FOREIGN KEY(noteId) REFERENCES Summary(dreamId))');
                }).then(() => {
                  console.log('Note table created successfully');
                }).catch((error) => {
                  console.log(error);
                })
              });
              resolve(db);
            })
            .catch(error => {
              console.log(error);
            })
        })
        .catch(error => {
          console.log('echoTest failed - plugin not functional');
        })
    })
  };
  closeDatabase(db) {
    if (db) {
      console.log('Closing db');
      db.close()
        .then(() => {
          console.log('Database closed');
        })
        .catch(err => {
          this.errorCB(error)
        });
    } else {
      console.log('Database was not opened');
    }
  };
  listProduct() {
    return new Promise((resolve) => {
      const posts = [];
      this.initDB().then((db) => {
        db.transaction((tx) => {
          tx.executeSql('SELECT * FROM Summary').then(([tx, results]) => {
            console.log('Query completed');
            var totalSummaries = results.rows.length;
            for (let i = 0; i < totalSummaries; i++) {
              let row = results.rows.item(i);
              console.log(`Summary Id: ${row.dreamId}, Summary: ${row.summary} `);
              const { dreamId, summary } = row;
              posts.push({
                dreamId,
                summary
              });
            }
            console.log(posts);
            resolve(posts);
          });
        }).then((result) => {
          this.closeDatabase(db);
        }).catch((err) => {
          console.log(err);
        });
      }).catch(err => {
        console.log(err);
      })
    })
  };
  postById(id) {
    console.log(id);
    return new Promise((resolve) => {
      this.initDB().then((db) => {
        db.transaction((tx) => {
          tx.executeSql('Select * FROM Summary WHERE dreamID = ?', [id]).then(([tx, results]) => {
            console.log(results);
            if (results.rows.length > 0) {
              let row = results.rows.item(0);
              resolve(row);
            }
          });
        }).then((result) => {
          this.closeDatabase(db);
        }).catch((err) => {
          console.log(err);
        });
      }).catch((err) => {
        console.log(err);
      })
    })
  }
  addNewPost(newPost) {
    return new Promise((resolve) => {
      this.initDB().then((db) => {
        db.transaction((tx) => {
          tx.executeSql(`INSERT INTO Summary (summary, emotions, settings, people) VALUES (${newPost.summary}, ${newPost.emotions}, ${newPost.settings}, ${newPost.people})`).then(([tx, results]) => {
            resolve(results);
          });
        }).then((result) => {
          console.log('New dream post successful!');
          this.closeDatabase(db);
        }).catch((err) => {
          console.log(err);
        });
      }).catch((err) => {
        console.log(err);
      })
    })
  }
  addNewNote(newNote) {
    return new Promise((resolve) => {
      this.initDB().then((db) => {
        db.transaction((tx) => {
          tx.executeSql('INSERT INTO Notes (note) VALUES (?)', [newNote.note]).then(([tx, results]) => {
            resolve(results);
          });
        }).then((result) => {
          this.closeDatabase(db);
        }).catch((err) => {
          console.log(err);
        });
      }).catch((err) => {
        console.log(err);
      })
    })
  }
  updatePost(id, sum) {
    console.log(id);
    return new Promise((resolve) => {
      this.initDB().then((db) => {
        db.transaction((tx) => {
          tx.executeSql('UPDATE Summary SET summary = ?, emotions = ?, settings = ?, people = ? WHERE dreamId = ?', [sum.summary, sum.emotions, sum.settings, sum.people, id])
        })
      })
    })
  }
  updateNotes(id, noteToUpdate) {
    console.log(id);
    return new Promise((resolve) => {
      this.initDB().then((db) => {
        db.transaction((tx) => {
          tx.executeSql('UPDATE Notes SET note = ? WHERE dreamId = ?', [sum.summary, id]).then(([tx, results]) => {
            resolve(results);
          });
        }).then((result) => {
          this.closeDatabase(db);
        }).catch((err) => {
          console.log(err);
        });
      }).catch((err) => {
        console.log(err);
      });
    });
  }
  deletePost(id) {
    return new Promise((resolve) => {
      this.initDB().then((db) => {
        db.transaction((tx) => {
          tx.executeSql('DETE FROM Summary WHERE dreamId = ?', [id]).then(([tx, results]) => {
            console.log(results);
            resolve(results);
          });
        }).then((result) => {
          this.closeDatabase(db);
        }).catch((err) => {
          console.log(err);
        });
      }).catch((err) => {
        console.log(err);
      })
    })
  }
}