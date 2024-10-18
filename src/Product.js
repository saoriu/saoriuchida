// Import necessary libraries
import React from 'react';

// Define the Product component
const Product = () => {
  return (
    <div className="work">
      {/* Header */}
      <header className="product-header">
        <h1>Product Management Philosophy</h1>
      </header>

      {/* Product Details Section */}
      <section className="product-details">
        <div className="product-info">
          <h2>Approach and Model</h2>
          <p>
            The purpose of product discovery is to make sure we have some evidence that when we ask the engineers to build a production-quality product, it won’t be a wasted effort – to do this we need to address these critical risks:
          </p>
          <ul>
            <li>Will the customer buy this, or choose to use it? (Value risk)</li>
            <li>Can the user figure out how to use it? (Usability risk)</li>
            <li>Can we build it? (Feasibility risk)</li>
            <li>Does this solution work for our business? (Business viability risk)</li>
          </ul>

          <h2>Challenges</h2>
          <p>
            For most product teams, there are two very significant challenges to tackle:
          </p>
          <ul>
            <li>Discovering in detail what the customer solution needs to be. That includes everything from making sure there are enough customers that even need this solution (the demand) and then coming up with a solution that works for our customers and for our business.</li>
            <li>We need to ensure we deliver a robust and scalable implementation that our customers can depend on for consistently reliable value. Our team needs to be able to release with confidence.</li>
          </ul>
          <p>So, we need to learn fast, yet also release with confidence.</p>

          <h2>Principles</h2>
          <p>
            When it comes to how we do product discovery, there are a set of core principles that drive how we work:
          </p>
          <ul>
            <li>We can’t count on our customers (or our executives or stakeholders) to tell us what to build. Customers don’t know what’s possible, and with technology products, none of us know what we really want until we actually see it. It’s not that customers or our executives are necessarily wrong; it’s just that it’s our job to make sure the solution we deliver solves the underlying problem. This is probably the most fundamental principle in all of modern product.</li>
            <li>The most important thing is to establish compelling value. We can survive for a while with usability issues or performance issues, but without the core value, we really have nothing. As a result, this is generally where we’ll need to spend most of our discovery time.</li>
            <li>We need to validate the feasibility of our ideas during discovery, not after. If the first time your developers see an idea is at sprint planning, we have failed. We need to ensure the feasibility before we decide to build, not after. Not only does this end up saving a lot of wasted time, but it turns out that getting the engineer’s perspective earlier also tends to improve the solution itself, and it’s critical for shared learning.</li>
            <li>Product discovery is about shared learning. Healthy collaboration involves some necessary friction – the ability to disagree and work through many often conflicting goals and constraints. It is tempting for many people to just avoid the friction. But the innovation would likely suffer. When at a crossroads, we test our hypothesis.</li>
          </ul>

          <h2>Work</h2>
          <p>
            This framework was inspired by the book of the same name by the most goated figure in Product, Marty Cagan, which draws from the lessons of the most successful tech companies to come out of Silicon Valley.
          </p>
          <p>
            We also rely on the theory and practice of Continuous Delivery, as defined by renowned product coach Teresa Torres. Sign up for her mini email courses on a variety of related topics:
          </p>
          <a href="https://learn.producttalk.org/mini-courses">https://learn.producttalk.org/mini-courses</a>
        </div>
      </section>
    </div>
  );
};

// Export the Product component
export default Product;