import { createContext } from 'react';

const defaultUserMeta = {
  firstName: 'Jane',
  lastName: 'Smith',
  email: 'jane.smith@example.com',
  organizationId: 'org-1',
  organizationName: 'Acme Corp',
  defaultOrganizationIsEnabled: true,
  isAccountEnabled: true,
  organizations: [
    { organizationId: 'org-1', organizationName: 'Acme Corp', isEnabled: true },
    { organizationId: 'org-2', organizationName: 'Volve Technologies', isEnabled: true },
  ],
};

export const AppContext = createContext({ userMeta: defaultUserMeta });
