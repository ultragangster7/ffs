import math
from PIL import Image, ImageDraw

def create_fox_icon(size, output_path):
    # Create image with RGBA
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Scale factor
    s = size / 512.0
    
    # Rounded rectangle background
    padding = 24 * s
    corner_radius = 110 * s
    x0, y0 = padding, padding
    x1, y1 = size - padding, size - padding
    
    # Draw gradient-like background using concentric rounded rectangles or solid deep rose/crimson
    # Background color: #e11d48 (225, 29, 72) to #9f1239 (159, 18, 57)
    draw.rounded_rectangle([x0, y0, x1, y1], radius=corner_radius, fill=(225, 29, 72, 255))
    
    # Inner subtle glow/border
    inner_pad = padding + 6 * s
    draw.rounded_rectangle([inner_pad, inner_pad, size - inner_pad, size - inner_pad], 
                           radius=corner_radius - 4 * s, outline=(255, 255, 255, 45), width=int(3 * s))

    # Center coordinates
    cx, cy = size / 2, size / 2 + 10 * s

    # Geometric Fox Face & Shield Emblem
    # Fox Left Ear:
    ear_l = [(cx - 130 * s, cy - 140 * s), (cx - 40 * s, cy - 30 * s), (cx - 140 * s, cy + 10 * s)]
    draw.polygon(ear_l, fill=(255, 255, 255, 240))
    # Inner ear left
    ear_l_in = [(cx - 120 * s, cy - 120 * s), (cx - 55 * s, cy - 35 * s), (cx - 125 * s, cy - 5 * s)]
    draw.polygon(ear_l_in, fill=(255, 180, 195, 255))

    # Fox Right Ear:
    ear_r = [(cx + 130 * s, cy - 140 * s), (cx + 40 * s, cy - 30 * s), (cx + 140 * s, cy + 10 * s)]
    draw.polygon(ear_r, fill=(255, 255, 255, 240))
    # Inner ear right
    ear_r_in = [(cx + 120 * s, cy - 120 * s), (cx + 55 * s, cy - 35 * s), (cx + 125 * s, cy - 5 * s)]
    draw.polygon(ear_r_in, fill=(255, 180, 195, 255))

    # Fox Face Cheek & Head silhouette
    face_main = [
        (cx, cy - 40 * s),        # Top center head
        (cx - 140 * s, cy + 10 * s),# Left cheek outer
        (cx - 70 * s, cy + 100 * s),# Left lower cheek
        (cx, cy + 160 * s),        # Chin / Snout tip
        (cx + 70 * s, cy + 100 * s),# Right lower cheek
        (cx + 140 * s, cy + 10 * s), # Right cheek outer
    ]
    draw.polygon(face_main, fill=(255, 241, 242, 255))

    # Orange/Rose Fox Mask
    mask = [
        (cx, cy - 40 * s),
        (cx - 100 * s, cy - 5 * s),
        (cx - 50 * s, cy + 60 * s),
        (cx, cy + 20 * s),
        (cx + 50 * s, cy + 60 * s),
        (cx + 100 * s, cy - 5 * s)
    ]
    draw.polygon(mask, fill=(251, 113, 133, 255))

    # Fox Eyes (Sleek angled zero-trust slits)
    eye_l = [(cx - 65 * s, cy + 28 * s), (cx - 30 * s, cy + 38 * s), (cx - 55 * s, cy + 42 * s)]
    eye_r = [(cx + 65 * s, cy + 28 * s), (cx + 30 * s, cy + 38 * s), (cx + 55 * s, cy + 42 * s)]
    draw.polygon(eye_l, fill=(59, 13, 30, 255))
    draw.polygon(eye_r, fill=(59, 13, 30, 255))

    # Fox Nose
    nose = [(cx - 18 * s, cy + 130 * s), (cx + 18 * s, cy + 130 * s), (cx, cy + 152 * s)]
    draw.polygon(nose, fill=(59, 13, 30, 255))

    # Small Zero-Trust Shield icon on forehead
    shield_pts = [
        (cx, cy - 75 * s),
        (cx + 24 * s, cy - 60 * s),
        (cx + 20 * s, cy - 20 * s),
        (cx, cy - 5 * s),
        (cx - 20 * s, cy - 20 * s),
        (cx - 24 * s, cy - 60 * s)
    ]
    draw.polygon(shield_pts, fill=(255, 255, 255, 255))
    shield_inner = [
        (cx, cy - 68 * s),
        (cx + 17 * s, cy - 56 * s),
        (cx + 14 * s, cy - 24 * s),
        (cx, cy - 12 * s),
        (cx - 14 * s, cy - 24 * s),
        (cx - 17 * s, cy - 56 * s)
    ]
    draw.polygon(shield_inner, fill=(225, 29, 72, 255))

    img.save(output_path, "PNG")
    print(f"Generated {output_path} ({size}x{size})")

create_fox_icon(192, "www/icon-192.png")
create_fox_icon(512, "www/icon-512.png")
create_fox_icon(64, "www/favicon.png")
