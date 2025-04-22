import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://mpkijprcubmttyjpxasg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wa2lqcHJjdWJtdHR5anB4YXNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMDc3MDEsImV4cCI6MjA1OTg4MzcwMX0.9ezq3Pg_xAj4pQLNxhzWq0do0HCl8EuoNyMmIinS3bE');
export { supabase };