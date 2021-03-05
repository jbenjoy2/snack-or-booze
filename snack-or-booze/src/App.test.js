import React from 'react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

it('renders without crashing', () => {
	render(
		<MemoryRouter initialEntries={[ '/' ]}>
			<App />
		</MemoryRouter>
	);
});

it('matches snapshot', () => {
	const { asFragment } = render(
		<MemoryRouter initialEntries={[ '/' ]}>
			<App />
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});

it('can render the /home route', async () => {
	const { getByText } = render(
		<MemoryRouter initialEntries={[ '/' ]}>
			<App />
		</MemoryRouter>
	);

	await act(() => sleep(2000));
	const text = getByText("Welcome to Silicon Valley's premier dive cafe!");
	expect(text).toBeInTheDocument();
});
