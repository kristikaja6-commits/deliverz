import React from "react";
import Logo from "./Logo";

/**
 * Luxury header that matches the futuristic theme.
 */
export default function Header({ currentUser, onSignOut }) {
  return (
    <header className="luxury-header">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-3">
          <Logo size={44} />
          <div>
            <a href="#/" className="text-2xl font-bold text-gold">deliverz</a>
            <div className="text-sm text-muted">Premium cross-border deliveries</div>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <a href="#/" className="nav-link">Search</a>
          {!currentUser && <a href="#/auth/signin" className="nav-link">Sign in</a>}
          {!currentUser && <a href="#/register" className="nav-link">Register</a>}
          {currentUser && <a href="#/dashboard" className="nav-link">Dashboard</a>}
          {currentUser ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted">Hi, {currentUser.name || currentUser.email}</span>
              <button onClick={onSignOut} className="px-3 py-1 rounded border border-gold text-gold hover:bg-gold/10">Sign out</button>
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  );
}