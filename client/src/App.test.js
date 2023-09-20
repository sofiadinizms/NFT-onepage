// import React from 'react'
// import Theme from './global/theme';
// import { cleanup, render, screen, fireEvent } from '@testing-library/react';
// import { Sidebar, Navbar, Banner, Footer, References, Journey, Goals } from './components';
// import { BrowserRouter } from 'react-router-dom';

// import 'jest-styled-components';
// import '@testing-library/jest-dom';

// afterEach(cleanup);

// describe('Banner', () => {
//   beforeEach(() => {
//     render(<Banner />)
//   })

//   test('Check if components are rendered', async() => {
    
//     const appleButton = await screen.findByText(/App Store/);
//     const androidButton = await screen.findByText(/Play Store/);

//     expect(appleButton).toBeInTheDocument();
//     expect(androidButton).toBeInTheDocument();
    
//   })
// })

// describe('Sidebar', () => {
//   beforeEach(() => {
//     render(
//     <BrowserRouter>
//     <Navbar />
//     <Sidebar />
//     </BrowserRouter>)
//   })

//   test('Check if sidebar is responding to interaction',async () => {
//     const DownloadBtn = screen.getByTestId('download-button');
    
//     expect(DownloadBtn).toBeInTheDocument();
//     fireEvent.click(DownloadBtn)

//     const sidebar = await screen.findByTestId('sidebar');
//     expect(sidebar).toBeInTheDocument();
//   })
// })

// describe('Footer', () => {
//   beforeEach(() => {
//     render(<Footer />)
//   })

//   test('Check if components are rendered', async() => {
//     const logoFooter = screen.getByTestId('LogoFooter');

//     const linkAppStore = await screen.findByText(/Baixe nosso app na App Store/);
//     const linkAndroid = await screen.findByText(/Baixe nosso app na Play Store/);
//     const paragraph = await screen.findByText(/NFT: o jogo é um projeto desenvolvido para a cadeira de Engenharia de Software, ministrada pelo professor Vinicius Garcia no curso de Sistemas de Informação da UFPE./)

//     expect(logoFooter).toBeInTheDocument();
//     expect(linkAppStore).toBeInTheDocument();
//     expect(linkAndroid).toBeInTheDocument();
//     expect(paragraph).toBeInTheDocument();

//   })
// })

// describe('References', () => {
//   beforeEach(() => {
//     render(<References />)
//   })

//   test('Check if all the references components are being rendered', async() => {
//     const title = screen.getByText(/Aprofunde seus conhecimentos/);

//     const content = await screen.findAllByTestId('titulo-conteudo')

//     expect(title).toBeInTheDocument();
//     expect(content[0]).toBeInTheDocument();
//     expect(content[1]).toBeInTheDocument();
//     expect(content[2]).toBeInTheDocument();
//   })
// })

// describe('Journey', () => {
//   beforeEach(() => {
//     render(<Journey />)
//   })

//   test('check if the components are being rendered', () => {
//     const title = screen.getByText(/Escolha sua jornada!/)
//     const text = screen.getByText(/Defina seu modo de jogo e dê o primeiro passo na sua jornada!/)

//     expect(text).toBeInTheDocument();
//     expect(title).toBeInTheDocument();
//   })
// })

// describe('Goals', () => {
//   beforeEach(() => {
//     render(<Goals />)
//   })

//   test('check if components are rendering', async() => {
//     const goalTitles = await screen.findAllByTestId('goalTitle');

//     expect(goalTitles[0]).toBeInTheDocument();
//     expect(goalTitles[1]).toBeInTheDocument();
//     expect(goalTitles[2]).toBeInTheDocument();
//   })
// })

