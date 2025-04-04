import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const filePath = searchParams.get('path');
    
    if (!filePath) {
      return new Response('Path parameter is required', { status: 400 });
    }
    
    // Protect against path traversal
    const sanitizedPath = path.normalize(filePath).replace(/^(\.\.(\/|\\|$))+/, '');
    const fullPath = path.join(process.cwd(), 'public', 'docs', `${sanitizedPath}.md`);
    
    // Read the markdown file
    let content;
    try {
      content = await fs.readFile(fullPath, 'utf8');
    } catch (err) {
      console.error(`File not found: ${fullPath}`, err.message);
      return new Response('Markdown file not found', { status: 404 });
    }
    
    // Return the markdown content
    return new Response(content, {
      headers: {
        'Content-Type': 'text/markdown; charset=UTF-8',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    console.error('Error serving markdown:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
} 