import React, { useState } from 'react';
import SkinImprovement from './components/subcategory/SkinImprovement';

const Settings = () => {
  const categories = {
    General: ["Overview", "Settings"],
    Password: ["Change Password", "Two-Factor Auth"],
    Price: ["Pricing Plans", "Discounts"],
    Treatments: ["Injectables", "Skin improvement", "Hair removal", "Soft surgery", "Plastic surgery"],
  };

  const [activeCategory, setActiveCategory] = useState(Object.keys(categories)[0]);
  const [activeSubCategory, setActiveSubCategory] = useState(categories[Object.keys(categories)[0]][0]);

  return (
    <>
      <h3 className="heading-page">Settings</h3>
      <div className="row gap-3 w-100">
        {/* Left Sidebar with Category Buttons */}
        <div className="col-2 mt-2">
          <div className="category">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active-btn' : ''}`}
                onClick={() => {
                  setActiveCategory(category);
                  setActiveSubCategory(categories[category][0]);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="col-2">
          {/* Subcategory Buttons */}
          {activeCategory && (
            <div>
              <h3 className="category-title">{activeCategory}</h3>
              <div className="subcategory mt-3">
                {categories[activeCategory].map((sub) => (
                  <button
                    key={sub}
                    className={`subcategory-btn ${activeSubCategory === sub ? 'subcategory-btn-active' : ''}`}
                    onClick={() => setActiveSubCategory(sub)}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="col-7 mt-4">
          <div className="category-content">
            {activeSubCategory ? (
              <div className="content">
                <div>
                  <p className="mb-0 sub-title">{activeSubCategory}</p>
                  <p className="mb-0 title-main-category">{activeCategory}</p>
                </div>

                {/* 🔹 Conditionally Render `SkinImprovement` Component */}
                {activeSubCategory === "Skin improvement" ? (
                  <SkinImprovement />
                ) : (
                  <div>
                    <h3>Content for {activeSubCategory}</h3>
                    <p>Here you can add content related to {activeSubCategory}.</p>
                  </div>
                )}
              </div>
            ) : (
              <h3>Select a subcategory to see content</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
