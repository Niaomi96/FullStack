
db.issues.remove({});

const issuesDB = [
  {
    id: 1, status: "New", owner: "Vitalis", effort: 5,
   created: new Date ('2022-01-18'), due: undefined,
   title:"No1 Climatechange"
   },
   {
   id: 2, status: "Assigned", owner: "Mmamotse", effort: 14,
   created: new Date ('2021-01-17'), due: new Date('2021-01-25'),
   title:"  No2 Diversity"
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
