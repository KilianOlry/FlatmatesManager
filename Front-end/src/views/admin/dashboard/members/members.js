import member from './member';

const renderComponent = (dataMembers) => `
  <ul class='list-member p-3 rounded-3xl shadow'>
    ${dataMembers.map((item) => member(item)).join('')}
  </ul>
`;

export default renderComponent;
