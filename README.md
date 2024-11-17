# FYP: AI Based Agriculture Social Media App

## Project Overview

This Final Year Project (FYP), titled **AI-Based Agriculture Social Media App**, is developed as part of the Bachelor of Science in Computer Science program at the University of Agriculture, Faisalabad. The project aims to create a dedicated social media platform connecting farmers and researchers to exchange knowledge, discuss agricultural challenges, and leverage AI-driven insights to enhance productivity. The platform will utilize modern technologies to provide a comprehensive and interactive solution tailored to the agricultural community's unique needs.

## Problem Statement

Farmers in rural areas often struggle with accessing timely and reliable agricultural advice, expert consultations, and information sharing. The lack of a unified platform where farmers and researchers can collaborate leads to inefficiencies, poor yield outcomes, and missed opportunities for learning from best practices. Current social media platforms do not cater specifically to the agricultural sector's challenges and lack domain-specific AI assistance.

## Proposed Solution

The proposed solution is to develop an **AI-Based Agriculture Social Media App** that brings together farmers and researchers on a single platform. The key features include AI-driven recommendations, a community-based question-and-answer system, and user ranking for credibility. The system aims to:

- Provide AI-driven suggestions and solutions to farmers' queries.
- Facilitate community-driven responses with a point-based ranking system for user engagement.
- Enable researchers to share updates, findings, and guidance.
- Improve farmers' access to accurate, timely, and domain-specific solutions.

## Key Features

- **AI-Powered Query Response Bot**: An intelligent bot will provide initial suggestions for farmers' queries and issues based on a database of agricultural knowledge.
- **Community Interaction**: Farmers and researchers can respond to questions, discuss topics, and gain points based on user ratings of their comments.
- **Point-Based Ranking System**: Users will accumulate points based on the helpfulness of their responses, boosting their visibility and credibility in the community.
- **Issue Tagging and Notification**: When a query is complex or beyond the AI's scope, it will tag the top 5 users with the highest points for further assistance.
- **User Profiles and History Tracking**: Track user interactions, contributions, and history for better engagement.
- **(Optional)**: Future features such as crop disease detection through image uploads, predictive analytics for crop yield, etc.

## Technology Stack

- **Frontend**: React Native (for mobile app development)
- **Backend**: Node.js with Express.js
- **Database**: Firebase Realtime Database (for user data, posts, and interactions)
- **AI/ML**: Pre-trained models and fine-tuned algorithms using Hugging Face and custom ML models where necessary
- **NLP and Generative AI**: LangChain for interactive and iterative user engagement
- **Others**: Firebase Cloud Messaging for notifications, authentication, and real-time updates

## Workflow

1. **User Registration and Authentication**: Farmers and researchers register and set up profiles.
2. **Posting Questions**: Farmers can post questions, issues, or challenges they are facing in agriculture.
3. **AI Bot Response**: The AI bot provides an initial response to the query using a pre-trained model.
4. **Community Interaction**: Other users can provide additional responses, and the best responses earn points based on ratings.
5. **Tagging Experts**: If the query is not fully addressed by the bot, the system tags top users with expertise for their input.

## Deployment

The project will be deployed using:

- **Platform**: Firebase for backend services, hosting, and cloud functions
- **Live Demo**: [URL to demo if available]

## Benefits

- **Enhanced Knowledge Sharing**: Bridging the gap between farmers and researchers for real-time problem-solving.
- **AI-Assisted Solutions**: Immediate AI-driven responses improve access to timely advice.
- **Community Engagement**: Point-based ranking encourages active participation and the sharing of expert insights.
- **Scalability**: Designed for future enhancements such as integrating computer vision for crop health analysis.

## Installation Instructions

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/zahooronly/FYP.git
   cd FYP
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server::

   ```bash
   npm run dev
   ```
