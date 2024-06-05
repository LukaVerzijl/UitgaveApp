/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as IndexImport } from './routes/index'
import { Route as AuthenticatedTotalexpesesImport } from './routes/_authenticated/totalexpeses'
import { Route as AuthenticatedProfileImport } from './routes/_authenticated/profile'
import { Route as AuthenticatedExpensesImport } from './routes/_authenticated/expenses'
import { Route as AuthenticatedCreateExpenseImport } from './routes/_authenticated/create-expense'

// Create/Update Routes

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedTotalexpesesRoute = AuthenticatedTotalexpesesImport.update({
  path: '/totalexpeses',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedProfileRoute = AuthenticatedProfileImport.update({
  path: '/profile',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedExpensesRoute = AuthenticatedExpensesImport.update({
  path: '/expenses',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedCreateExpenseRoute = AuthenticatedCreateExpenseImport.update(
  {
    path: '/create-expense',
    getParentRoute: () => AuthenticatedRoute,
  } as any,
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/create-expense': {
      id: '/_authenticated/create-expense'
      path: '/create-expense'
      fullPath: '/create-expense'
      preLoaderRoute: typeof AuthenticatedCreateExpenseImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/expenses': {
      id: '/_authenticated/expenses'
      path: '/expenses'
      fullPath: '/expenses'
      preLoaderRoute: typeof AuthenticatedExpensesImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/profile': {
      id: '/_authenticated/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof AuthenticatedProfileImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/totalexpeses': {
      id: '/_authenticated/totalexpeses'
      path: '/totalexpeses'
      fullPath: '/totalexpeses'
      preLoaderRoute: typeof AuthenticatedTotalexpesesImport
      parentRoute: typeof AuthenticatedImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AuthenticatedRoute: AuthenticatedRoute.addChildren({
    AuthenticatedCreateExpenseRoute,
    AuthenticatedExpensesRoute,
    AuthenticatedProfileRoute,
    AuthenticatedTotalexpesesRoute,
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_authenticated"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/create-expense",
        "/_authenticated/expenses",
        "/_authenticated/profile",
        "/_authenticated/totalexpeses"
      ]
    },
    "/_authenticated/create-expense": {
      "filePath": "_authenticated/create-expense.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/expenses": {
      "filePath": "_authenticated/expenses.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/profile": {
      "filePath": "_authenticated/profile.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/totalexpeses": {
      "filePath": "_authenticated/totalexpeses.tsx",
      "parent": "/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
