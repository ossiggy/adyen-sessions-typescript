import { mount } from 'enzyme';
import { PaymentsForm } from '..';
import { PaymentsFormProps } from '../../types';

const mockOptions = {
    value: 25,
    currency: 'EUR',
    countryCode: 'NL',
    component: 'dropin'
};

const mockSubmit = jest.fn();
const mockChange = jest.fn();

describe('PaymentsForm', () => {
    test('Renders the default Payments Form', () => {
        const wrapper = mount(<PaymentsForm options={mockOptions} onSubmit={mockSubmit} onChange={mockChange} />);
    });
});
