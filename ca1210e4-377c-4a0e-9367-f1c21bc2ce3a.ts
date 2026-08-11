export default {
  "entity": {
    "id": "ca1210e4-377c-4a0e-9367-f1c21bc2ce3a",
    "name": "战报 1967.6.20",
    "internal": false,
    "type": "img",
    "official": false,
    "author": "",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives25/main/ca1210e4-377c-4a0e-9367-f1c21bc2ce3a/1.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "authors": [
          "外滩人防四块政宣组"
        ],
        "dates": [
          {
            "day": 20,
            "month": 6,
            "year": 1967
          }
        ],
        "is_range_date": false,
        "ocr": {
          "content_thresholds": [
            0.0732,
            0.3714,
            0.3511,
            0.0534
          ]
        },
        "ocr_exceptions": {},
        "page_end": 1,
        "page_start": 1,
        "title": "欢迎您——中波公司、水产局战友！"
      },
      {
        "authors": [
          "外滩人防四块政宣组"
        ],
        "dates": [
          {
            "day": 20,
            "month": 6,
            "year": 1967
          }
        ],
        "is_range_date": false,
        "ocr": {
          "content_thresholds": [
            0.2122,
            0.3569,
            0.0883,
            0.6508
          ]
        },
        "ocr_exceptions": {},
        "page_end": 1,
        "page_start": 1,
        "title": "中波公司"
      },
      {
        "authors": [
          "外滩人防四块政宣组"
        ],
        "dates": [
          {
            "day": 20,
            "month": 6,
            "year": 1967
          }
        ],
        "is_range_date": false,
        "ocr": {
          "content_thresholds": [
            0.6488,
            0.0763,
            0.0646,
            0.3015
          ]
        },
        "ocr_exceptions": {},
        "page_end": 1,
        "page_start": 1,
        "title": "各尽所能"
      }
    ],
    "ocr": {
      "extract_text_from_pdf": false,
      "use_onnx": true,
      "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
      "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
    }
  },
  "parser_id": "automation",
  "path": "ca1210e4-377c-4a0e-9367-f1c21bc2ce3a",
  "resource_type": "book",
  "version": 2
}