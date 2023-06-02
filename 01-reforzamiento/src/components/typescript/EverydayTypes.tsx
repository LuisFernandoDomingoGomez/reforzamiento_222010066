import React from 'react';

const EverydayTypes: React.FC = () => {
  let username: string = 'Luis Fernando';
  const age: number = 21;
  const average: number = 7;
  const myarr: string[] = [];
  let big1 = BigInt(9007199254099);

  myarr.push(username);
  myarr.push(age.toString());
  myarr.push(average.toString());

  return (
    <div className="card" style={{ width: '18rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <div className="card-header" style={{ backgroundColor: '#f8f9fa', border: 'none', padding: '16px', borderBottom: '1px solid #ccc' }}>
        <h3 className="card-title" style={{ margin: '0' }}>EverydayTypes: </h3>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <strong>Username:</strong> {username}
        </li>
        <li className="list-group-item">
          <strong>Age:</strong> {age}
        </li>
        <li className="list-group-item">
          <strong>Average:</strong> {average}
        </li>
        <li className="list-group-item">
          <strong>Array Items:</strong>
          <ul className="list-group">
            {myarr.map((item, index) => (
              <li key={index} className="list-group-item">{item}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default EverydayTypes;
