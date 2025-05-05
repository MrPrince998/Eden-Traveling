import React from 'react'
import NavBar from '../components/NavBar'
import ArticleCard from '../components/ArticleCard'
import Footer from '../components/Footer';

const ArticlePage = () => {
  return (
    <section>
      <NavBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10">
        <ArticleCard />
      </div>
      <Footer />
    </section>
  );
}

export default ArticlePage
