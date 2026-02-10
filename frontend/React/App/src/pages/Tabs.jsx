import { useState } from "react";
function Tabs() {
  const [active, setActive] = useState("react");



  





  return (
    <>
      <div class="flex gap-3">
        <button
          className="px-5 py-5 bg-red-300 text-xl font-bold m-1"
          onClick={() => setActive("react")}
        >
          React
        </button>
        <button
          className="px-5 py-5 bg-blue-300 text-xl font-bold m-1"
          onClick={() => setActive("laravel")}
        >
          Laravel
        </button>
      </div>

      {active === "react" && (
        <div id="react" className="space-y-3">
          <h1 className="text-2xl font-bold">React.js</h1>

          <p>
            React is a JavaScript library for building fast and interactive user
            interfaces. It is maintained by Meta and widely used in modern web
            development.
          </p>

          <h2 className="text-xl font-semibold">Why Use React?</h2>
          <ul className="list-disc ml-6">
            <li>Component-based architecture</li>
            <li>Fast rendering using Virtual DOM</li>
            <li>Reusable UI components</li>
            <li>Strong ecosystem and community</li>
          </ul>

          <h2 className="text-xl font-semibold">Core Concepts</h2>
          <ul className="list-disc ml-6">
            <li>JSX</li>
            <li>Props & State</li>
            <li>Hooks (useState, useEffect)</li>
            <li>Conditional Rendering</li>
          </ul>

          <p className="text-sm text-gray-600">
            React is ideal for SPAs, dashboards, and scalable frontend
            applications.
          </p>
        </div>
      )}

      {active === "laravel" && (
        <div id="laravel" className="space-y-3">
          <h1 className="text-2xl font-bold">Laravel</h1>

          <p>
            Laravel is a powerful PHP framework designed to make web development
            faster, cleaner, and more enjoyable using MVC architecture.
          </p>

          <h2 className="text-xl font-semibold">Why Use Laravel?</h2>
          <ul className="list-disc ml-6">
            <li>Elegant and expressive syntax</li>
            <li>Built-in authentication & security</li>
            <li>Powerful routing and middleware</li>
            <li>Great ORM with Eloquent</li>
          </ul>

          <h2 className="text-xl font-semibold">Core Features</h2>
          <ul className="list-disc ml-6">
            <li>Blade Templating Engine</li>
            <li>Eloquent ORM</li>
            <li>Artisan CLI</li>
            <li>Database Migrations & Seeders</li>
          </ul>

          <p className="text-sm text-gray-600">
            Laravel is perfect for building secure APIs, full-stack
            applications, and enterprise-level systems.
          </p>
        </div>
      )}
    </>
  );
}

export default Tabs;
