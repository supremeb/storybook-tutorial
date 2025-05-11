import React, { useState } from 'react'
import Head from 'next/head'
import { Alert } from '../components/Alert/Alert'
import { Button } from '../components/Button/Button'
import { Card } from '../components/Card/Card'
import { Modal } from '../components/Modal/Modal'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  
  const handleButtonClick = () => {
    setShowSuccessAlert(true);
    setTimeout(() => setShowSuccessAlert(false), 3000);
  };

  const containerStyle = {
    padding: '0 2rem',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };
  
  const mainStyle = {
    padding: '4rem 0',
    flex: '1',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  const titleStyle = {
    margin: '0',
    lineHeight: '1.15',
    fontSize: '3rem',
    textAlign: 'center' as const,
    marginBottom: '2rem',
  };
  
  const descriptionStyle = {
    margin: '0 0 2rem',
    lineHeight: '1.5',
    fontSize: '1.5rem',
    textAlign: 'center' as const,
  };
  
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    width: '100%',
    maxWidth: '1200px',
  };
  
  const footerStyle = {
    display: 'flex',
    flex: '1',
    padding: '2rem 0',
    borderTop: '1px solid #eaeaea',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <Head>
        <title>Design System Demo</title>
        <meta name="description" content="Demo of our design system components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={mainStyle}>
        <h1 style={titleStyle}>
          Design System Components
        </h1>

        <p style={descriptionStyle}>
          Explore our component library
        </p>
        
        {showSuccessAlert && (
          <div style={{ width: '100%', maxWidth: '800px', margin: '0 0 20px 0' }}>
            <Alert 
              variant="success" 
              title="Success!" 
              dismissible 
              onDismiss={() => setShowSuccessAlert(false)}
            >
              Your action was completed successfully.
            </Alert>
          </div>
        )}

        <div style={gridStyle}>
          <Card title="Alert Component" hoverable>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Alert variant="info" title="Information">
                This is an informational alert.
              </Alert>
              <Alert variant="warning" title="Warning">
                This is a warning alert.
              </Alert>
              <Alert variant="error" title="Error">
                This is an error alert.
              </Alert>
              <Button 
                variant="primary" 
                label="Show Success Alert" 
                onClick={handleButtonClick} 
              />
            </div>
          </Card>

          <Card title="Button Component" hoverable>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Button variant="primary" label="Primary Button" />
              <Button variant="secondary" label="Secondary Button" />
              <Button variant="tertiary" label="Tertiary Button" />
              <Button variant="primary" label="Loading Button" loading />
              <Button variant="primary" label="Disabled Button" disabled />
              <Button 
                variant="primary" 
                label="Open Modal" 
                onClick={handleOpenModal} 
              />
            </div>
          </Card>

          <Card title="Card Component" hoverable>
            <p>This is a card component that can contain any content.</p>
            <p>Cards can be used for grouping related information.</p>
            <div style={{ marginTop: '10px' }}>
              <Button 
                variant="secondary" 
                size="sm" 
                label="Card Action" 
              />
            </div>
          </Card>
        </div>
      </main>

      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        title="Example Modal"
        size="md"
      >
        <div style={{ padding: '20px' }}>
          <p>This is a modal dialog that can contain any content.</p>
          <p>Modals are useful for focused tasks and confirmations.</p>
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <Button 
              variant="tertiary" 
              label="Cancel" 
              onClick={handleCloseModal} 
            />
            <Button 
              variant="primary" 
              label="Confirm" 
              onClick={() => {
                handleCloseModal();
                handleButtonClick();
              }} 
            />
          </div>
        </div>
      </Modal>

      <footer style={footerStyle}>
        <p>Design System Component Demo</p>
      </footer>
    </div>
  )
}
