import { is } from "@deepkit/type";

import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectLiteralProperty = _test_deepkit_is(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => is<ObjectLiteralProperty>(input),
    ObjectLiteralProperty.SPOILERS,
);