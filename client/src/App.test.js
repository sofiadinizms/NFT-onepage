import React from 'react'
import Theme from './global/theme';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { Sidebar, Navbar, Banner } from './components';
import { BrowserRouter } from 'react-router-dom';

import 'jest-styled-components';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('Banner', () => {
  beforeEach(() => {
    render(<Banner />)
  })

  test('Check if components are rendered', async() => {
    const downladButton = await screen.findByText(/App Store/);

    expect(downladButton).toBeInTheDocument();
  })
})

describe('Sidebar', () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
    <Navbar />
    <Sidebar />
    </BrowserRouter>)
  })

  test('Check if sidebar is responding to interaction',async () => {
    const DownloadBtn = screen.getByTestId('download-button');
    
    expect(DownloadBtn).toBeInTheDocument();
    fireEvent.click(DownloadBtn)

    const sidebar = await screen.findByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
  })
})

