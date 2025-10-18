#!/bin/bash

# SkillSwap - Quick Start Script
# This script starts both backend and frontend servers

echo " Starting SkillSwap..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Start Backend
echo -e "${BLUE}📦 Starting Backend Server...${NC}"
cd backend
npm run dev &
BACKEND_PID=$!
echo -e "${GREEN} Backend running on http://localhost:5000 (PID: $BACKEND_PID)${NC}"
echo ""

# Wait a bit for backend to start
sleep 2

# Start Frontend
echo -e "${BLUE} Starting Frontend Server...${NC}"
cd ../my-app
npm run dev &
FRONTEND_PID=$!
echo -e "${GREEN}Frontend running on http://localhost:5173 (PID: $FRONTEND_PID)${NC}"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN} SkillSwap is ready!${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Frontend: http://localhost:5173"
echo "Backend:  http://localhost:5000"
echo " Chat:     http://localhost:5173/chat"
echo ""
echo "Press Ctrl+C to stop all servers"
echo ""

# Wait for both processes
wait
