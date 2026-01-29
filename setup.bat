@echo off
echo ========================================
echo   Professional Portfolio Setup
echo ========================================
echo.

echo Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo Error: Failed to install dependencies
    exit /b 1
)

echo.
echo ========================================
echo   Installation Complete!
echo ========================================
echo.
echo Next steps:
echo   1. Customize your portfolio in components/
echo   2. Run: npm run dev
echo   3. Visit: http://localhost:3000
echo.
echo For deployment:
echo   1. Create a GitHub repository
echo   2. Push your code: git push origin main
echo   3. Deploy to Vercel: https://vercel.com
echo.
echo ========================================
