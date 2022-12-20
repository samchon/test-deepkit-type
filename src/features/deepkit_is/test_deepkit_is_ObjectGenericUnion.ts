import { is } from "@deepkit/type";

import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectGenericUnion = _test_deepkit_is(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => is<ObjectGenericUnion>(input),
    ObjectGenericUnion.SPOILERS,
);