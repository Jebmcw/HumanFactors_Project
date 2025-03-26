// Financial_Basics.js
import React from "react";
import "../pagescss/Financial_Basics.css";

const FinancialBasicsIntro = () => (
    <section className="intro">
        <h2>Welcome to Financial Basics</h2>
        <p>Understanding your finances is the first step toward financial freedom. This section will teach you the essential building blocks of budgeting, credit, saving, and more.</p>
    </section>
);

const TopicCard = ({ title, children }) => (
    <div className="topic-card">
        <h3>{title}</h3>
        <p>{children}</p>
    </div>
);

const QuickTips = () => (
    <aside className="quick-tips">
        <h4>Quick Tips</h4>
        <ul>
            <li>Pay yourself first.</li>
            <li>Track your expenses weekly.</li>
            <li>Set financial goals and review them monthly.</li>
            <li>Only use credit when you can repay in full.</li>
        </ul>
    </aside>
);

const FAQ = () => (
    <section className="faq">
        <h4>FAQs</h4>
        <details>
            <summary>What is a good credit score?</summary>
            <p>Typically 670 or higher is considered good. Excellent starts around 750.</p>
        </details>
        <details>
            <summary>How much should I save?</summary>
            <p>Aim for 20% of your income if possible, starting with an emergency fund of 3–6 months of expenses.</p>
        </details>
        <details>
            <summary>Do I need a budget?</summary>
            <p>Yes! A budget helps you take control of your money and reduce financial stress.</p>
        </details>
    </section>
);

const Financial_Basics = () => {
    return (
        <div className="financial-basics-container">
            <FinancialBasicsIntro />

            <div className="topics">
                <TopicCard title="Budgeting 101">
                    Learn how to track your income and expenses, and how to create a simple monthly budget that works for you.
                </TopicCard>
                <TopicCard title="Understanding Credit">
                    Discover how credit scores work, how to build good credit, and how to manage credit cards wisely.
                </TopicCard>
                <TopicCard title="Saving & Emergency Funds">
                    Understand the importance of saving for emergencies and future goals, and how to start building your savings today.
                </TopicCard>
            </div>

            <QuickTips />
            <FAQ />
        </div>
    );
};

export default Financial_Basics;
