#!/bin/bash

echo "Running setup..."
expect <<EOF
spawn bin/setup
expect "Email \[spree@example.com\]:"
send "admin@admin.com\r"
expect "Password:"
send "admin123456\r"
expect "Would you like to create a new admin user? (yes/no)"
send "no\r"
expect eof
EOF

echo "Setup complete."