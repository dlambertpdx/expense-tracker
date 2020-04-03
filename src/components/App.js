import React from 'react';
import { Header } from './Header';
import { Balance } from './Balance';
import './App.css';
import { IncomeExpenses } from './IncomeExpenses';

export default function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
      </div>
    </div>
  );
}
  
