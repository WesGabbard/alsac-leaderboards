import React from 'react'
import Container from 'constructicon/container'
import Links from '../Tabs'
import PageContentStatus from '../PageContentStatus'

const Page = ({
  children,
  notFound,
  status,
  ...props
}) => (
  <PageContentStatus status={status} notFound={notFound}>
    <Container width={36}>
      <Links
        links={[
          { name: 'Fundraisers', route: 'fundraisers' },
          { name: 'Teams', route: 'teams' },
          { name: 'Events', route: 'events' }
        ]}
        {...props}
      />
      {children}
    </Container>
  </PageContentStatus>
)

Page.defaultProps = {
  status: 'fetched'
}

export default Page
