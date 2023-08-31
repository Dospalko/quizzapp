import React from 'react'

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Quiz App</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700">
            Welcome to the Quiz App, where you can challenge your knowledge and have fun!
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Our mission is to provide an engaging platform for users to test their
            knowledge across various topics and learn something new every day.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            This project was built using Next.js and React, demonstrating the power of
            modern web development technologies.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            We hope you enjoy using our app and continue learning through quizzes.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
