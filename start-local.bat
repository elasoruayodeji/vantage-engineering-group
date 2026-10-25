@echo off
echo ========================================
echo  VANTAGE Engineering - Local Server
echo ========================================
echo.
echo Starting development server...
echo.
echo Your website will be available at:
echo   - Computer: http://localhost:3000
echo   - Phone:    http://[YOUR_IP]:3000
echo.
echo To find your IP address:
echo   Windows: Type 'ipconfig' in another terminal
echo   Look for "IPv4 Address" (usually 192.168.x.x)
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.
npm run dev
