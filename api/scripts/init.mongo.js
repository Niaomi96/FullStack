
/* global db print */
/* eslint no-restricted-globals: "off"  */

db.issues.remove({});
db.deleted_issues.remove({});

const issuesDB = [
  {
   id: 1,
   status: "New",
   owner: "Vitalis",
   effort: 5,
   created: new Date ('2022-01-18'),
   due: undefined,
   title:"No1 Climatechange",
   description: "Steps to prevent Climate change : "
   + '\n1. Limit the amount of Pollution.'
   + '\n2. Change the way we use water consumption.'
   + '\n3. Use energy saving for power usages.'
   + '\n3. Plant more trees.',
   },
   {
   id: 2,
   status: "Assigned",
   owner: "Mmamotse",
   effort: 14,
   created: new Date ('2021-01-17'),
   due: new Date('2021-01-25'),
   title:"  No2 Diversity",
   description: "Steps to reconstruct Diversity: "
   + '\n1. unused property or industrial land,be reconstructed into a safe place for wildlife.'
   + '\n2. Stop hunting in areas that dont need it.'
   + '\n3. Make sure invasive species are at a low population, to help native animals recoperate.',

   },
];

db.issues.insertMany(issuesDB);
const count = db.issues.count();
print('Insert', count, 'issues');

db.counters.remove({ _id: 'issues' });
db.counters.insert({ _id: 'issues', current: count });

db.issues.createIndex({ id: 1 }, { unique: true });
db.issues.createIndex({ status: 1});
db.issues.createIndex({ owner: 1});
db.issues.createIndex({ created: 1});
db.deleted_issues.createIndex({ id: 1 }, { unique: true });
