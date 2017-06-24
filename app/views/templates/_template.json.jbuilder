json.extract! template, :id, :name, :cat_id, :desc, :image, :price, :url, :created_at, :updated_at
json.url template_url(template, format: :json)
