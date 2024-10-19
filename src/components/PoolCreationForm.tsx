import React, { useState } from 'react';

interface PoolCreationFormProps {
  // Add any props you need to pass to this component
}

const PoolCreationForm: React.FC<PoolCreationFormProps> = () => {
  const [poolName, setPoolName] = useState('');
  const [poolDescription, setPoolDescription] = useState('');
  const [eligibilityCriteria, setEligibilityCriteria] = useState('');
  const [entryFee, setEntryFee] = useState(0);
  const [depositAmountRange, setDepositAmountRange] = useState([0.1, 1]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pool Name:
        <input
          type="text"
          value={poolName}
          onChange={(event) => setPoolName(event.target.value)}
        />
      </label>

      <label>
        Pool Description:
        <textarea
          value={poolDescription}
          onChange={(event) => setPoolDescription(event.target.value)}
        />
      </label>

      <label>
        Eligibility Criteria:
        <select
          value={eligibilityCriteria}
          onChange={(event) => setEligibilityCriteria(event.target.value)}
        >
          <option value="market-cap">Market Cap</option>
          <option value="token-type">Token Type</option>
        </select>
      </label>

      <label>
        Entry Fee:
        <input
          type="number"
          value={entryFee}
          onChange={(event) => setEntryFee(Number(event.target.value))}
        />
      </label>

      <label>
        Deposit Amount Range:
        <input
          type="number"
          value={depositAmountRange[0]}
          onChange={(event) => setDepositAmountRange([Number(event.target.value), depositAmountRange[1]])}
        />
        -
        <input
          type="number"
          value={depositAmountRange[1]}
          onChange={(event) => setDepositAmountRange([depositAmountRange[0], Number(event.target.value)])}
        />
      </label>

      <button type="submit">Create Pool</button>
    </form>
  );
};

export default PoolCreationForm;